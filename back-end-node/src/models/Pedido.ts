import { Schema, model } from 'mongoose';  

const PedidoSchema = new Schema({  
  idPet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },  
  idAdotante: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },  
  idOng: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },  
  idChat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },  
  status: { type: String, enum: ['pendente', 'aprovado', 'recusado'], default: 'pendente' }  
}, { timestamps: true });  

export default model('Pedido', PedidoSchema);  