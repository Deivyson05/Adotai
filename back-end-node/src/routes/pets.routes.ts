import { filtrarPetsProximos } from '../utils/calcularDistancia';  

router.get('/proximos', async (req, res) => {  
  const { latitude, longitude } = req.query;  
  const todosPets = await Pet.find();  
  const petsProximos = filtrarPetsProximos(  
    { latitude: Number(latitude), longitude: Number(longitude) },  
    todosPets,  
    10 // Distância em km  
  );  
  res.json(petsProximos);  
});  