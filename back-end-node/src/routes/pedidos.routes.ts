import { Router } from 'express';  
import Pedido from '../models/Pedido';  

const router = Router();  

router.post('/', async (req, res) => {  
  const { idPet, idAdotante, idOng, idChat } = req.body;  
  const pedido = await Pedido.create({ idPet, idAdotante, idOng, idChat });  
  res.status(201).json(pedido);  
});  

// Exemplo: Atualizar status do pedido  
router.patch('/:id/status', async (req, res) => {  
  const { status } = req.body;  
  const pedido = await Pedido.findByIdAndUpdate(req.params.id, { status }, { new: true });  
  res.json(pedido);  
});  

export default router;  