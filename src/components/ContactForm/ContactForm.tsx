'use client';
import { useState, FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { ContactInner, Form, Title } from './style';
import Button from '@/UI/Button';
import TextField from '@/UI/TextField';
import Container from '@/UI/Container';

const ContactForm: FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); 

    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;

    const validateForm = () => {
        if (formData.name.length < 2) return ('Введите имя больше 2 символов');
        if (!regEmail.test(formData.email)) return ('Некорректный адрес эл. почты');
        if (formData.message.length < 2) return ('Введите сообщение больше 2 символов');
        return;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', message: '' });
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) { setError(validationError); return; }

        setLoading(true);
        try {
            const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL!, formData);
            setSuccessMessage(data);
            resetForm();
        } catch {
            setError('Не удалось отправить сообщение.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <Container>
            <AnimatePresence mode='wait'>
                {!successMessage ? (
                    <ContactInner
                        layout
                        key='form'
                        initial={{ opacity: 0, scale: 0.8 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Title variant='h1'>Отправьте сообщение!</Title>
                        <Form onSubmit={handleSubmit} style={{ marginTop: '33px' }}>
                            <TextField
                                name='name'
                                label='Ваше имя'
                                placeholder='Ваше имя'
                                value={formData.name}
                                onChange={handleChange}
                                error={!!error && formData.name.length < 2}
                                variant='outlined'
                            />
                            <TextField
                                name='email'
                                label='Ваш email'
                                placeholder='Ваш email'
                                value={formData.email}
                                onChange={handleChange}
                                error={!!error && !regEmail.test(formData.email)}
                                variant='outlined'
                            />
                            <TextField
                                name='message'
                                label='Сообщение'
                                multiline
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!error && (formData.message.length < 2)}
                                variant='outlined'
                            />
                            <Button type='submit' disabled={loading} variant='contained' color='primary'>
                                {loading ? <CircularProgress size={31} color="inherit" /> : 'Отправить'}
                            </Button>
                        </Form>
                        <Snackbar
                            open={!!error}
                            autoHideDuration={3000}
                            onClose={() => setError('')}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                            <Alert severity='error' variant='filled' sx={{ width: '100%' }}>{error}</Alert>
                        </Snackbar>
                    </ContactInner>
                ) : (
                    <ContactInner
                        layout
                        key='success'
                        initial={{ opacity: 0, scale: 0.8 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}

                    >
                        <Title variant='h1'>{successMessage}</Title>
                    </ContactInner>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default ContactForm;