import {Request, Response} from 'express';
import knex from '../database/connection';


class ItemsController{
    async index(request: Request,response: Response)  {           //quero pegar uma rota de items
        const items = await knex('items').select('*');
    
    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://192.168.0.16:3333/uploads/${item.image}`,
        };
    });
    
        return response.json(serializedItems);
        }              //método index para listagem
}

export default ItemsController;