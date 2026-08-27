const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Data
const pecas = [
  {
    id: '1',
    name: 'Rolex Submariner Date',
    category: 'Relógios',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop',
    status: 'valido',
    description: 'Um clássico atemporal da relojoaria. Caixa em aço Oystersteel, mostrador preto, com detalhes exclusivos. Peça em estado impecável, mantida sempre em caixa forte. Uma verdadeira obra de arte da mecânica de precisão suíça.',
    passportId: 'LST-2026-R8910',
    expertName: 'Dr. Jean-Pierre Valois',
    expertDate: '15/08/2026'
  },
  {
    id: '2',
    name: 'Colar de Diamantes',
    category: 'Joias',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop',
    status: 'valido',
    description: 'Colar em ouro branco 18k com diamantes cravejados em lapidação brilhante. Elegância e sofisticação em uma peça única e numerada.',
    passportId: 'LST-2026-J1234',
    expertName: 'Maria Antônia',
    expertDate: '10/08/2026'
  },
  {
    id: '3',
    name: 'Quadro Abstrato Contemporâneo',
    category: 'Obras de Arte',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop',
    status: 'em revisão',
    description: 'Óleo sobre tela do renomado artista contemporâneo. A obra explora contrastes de cor e forma.',
    passportId: 'LST-2026-A5678',
    expertName: 'Carlos Silva',
    expertDate: 'Pendente'
  }
];

app.get('/api/pecas', (req, res) => {
  res.json(pecas);
});

app.get('/api/pecas/:id', (req, res) => {
  const peca = pecas.find(p => p.id === req.params.id);
  if (peca) {
    res.json(peca);
  } else {
    res.status(404).json({ message: 'Peça não encontrada' });
  }
});

// Mock Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Accept any login for MVP simulation
  if (email && password) {
    res.json({
      token: 'mock-jwt-token-123',
      user: {
        id: '1',
        name: 'Admin Vendedor',
        email: email,
        role: 'Vendedor'
      }
    });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Create Peca Route
app.post('/api/pecas', (req, res) => {
  const { name, category, price, description, image } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({ message: 'Nome, categoria e preço são obrigatórios' });
  }

  const newPeca = {
    id: String(pecas.length + 1),
    name,
    category,
    price: Number(price),
    description,
    image: image || 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop',
    status: 'em revisão', // Default status for new items
    passportId: 'Pendente',
    expertName: 'Pendente',
    expertDate: 'Pendente'
  };

  pecas.push(newPeca);
  res.status(201).json(newPeca);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
