import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ApiKeyInput } from '../context/ApiKeyContext';

const Introduction = () => {
    const { theme, toggleTheme } = useThemeContext();
    const navigate = useNavigate();

    return (
        <Container
            sx={{
                // Configurações gerais do container
                gap: 3,
                padding: 1,
                width: '100vw',
                height: '20vh',
                display: 'flex',
                borderRadius: 2,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: theme === 'light' ? 'text.primary' : 'text.secondary',
                position: 'relative', // Define o container como relativo para permitir o uso de elementos posicionados internamente
                overflow: 'hidden', // Garante que o background não extrapole os limites do container
            }}
        >
            {/* Background da imagem */}
            <Box
                sx={{
                    position: 'absolute', // Faz o background ser posicionado em relação ao container pai
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
                    backgroundPosition: 'center',
                    filter: theme === 'light' ? 'none' : 'grayscale(100%)', // Adiciona filtro no tema escuro
                    zIndex: -1, // Garante que o fundo fique atrás do conteúdo
                }}
            />

            {/* Logo de texto */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                }}
            >
                Conversor de Moedas
            </Typography>

            {/* Botões de navegação */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    zIndex: 1, // Garante que os botões estejam acima do fundo
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/')} // Navega para a página inicial
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/converter')} // Navega para a página de conversão
                >
                    Converter Moedas
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/creditos')} // Navega para a página de créditos
                >
                    Créditos
                </Button>
                <Button
                    variant="contained"
                    color={theme === 'light' ? 'primary' : 'error'}
                    size="large"
                    onClick={() =>
                        toggleTheme(theme === 'light' ? 'dark' : 'light')
                    } // Alterna entre temas claro e escuro
                >
                    {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
                </Button>
                <ApiKeyInput />
            </Box>
        </Container>
    );
};

export default Introduction;
