import React, {useCallback, useRef, useState} from 'react';
import './ContanctBlock.css';
import Button from '../../componets/Button/Button';
import BlockTitle from "../../componets/BlockTitle/BlockTitle";

export default function ContanctBlock() {
    const [form, setForm] = useState({
        name: '', phone: '', email: '', description: '', type_s: '', // backend field name
    });

    const formRef = useRef(null);

    const handleChange = field => e => setForm(prev => ({...prev, [field]: e.target.value}));

    const resetForm = () => setForm({name: '', phone: '', email: '', description: '', type_s: ''});

    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        try {
            const res = await fetch('https://gabemedia.ru/info', {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            resetForm();
            alert('Заявка отправлена! Мы скоро свяжемся с вами.');
        } catch (err) {
            console.error(err);
            alert('Не удалось отправить форму. Попробуйте ещё раз.');
        }
    }, [form]);

    const sendWith = channel => {
        setForm(prev => ({...prev, type_s: channel}));
        setTimeout(() => formRef.current?.requestSubmit(), 300);
    };

    return (<div id="contanct" className="contanct-block-cont">
        <BlockTitle title="пишите нам" color="black"/>
        <div className="contanct-block">
            <div className="contanct-left">
                Начни
                <br/>успешное
                <br/>продвижение
                <br/>вместе
                <br/>c <span>
          gabe media
        </span>
                <div className="contanct-circle"/>
            </div>

            <form
                ref={formRef}
                className="contanct-right"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    name="name"
                    placeholder="ваше имя"
                    required
                />
                <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    name="phone"
                    placeholder="номер телефона"
                    required
                />
                <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    name="email"
                    placeholder="e‑mail"
                    required
                />
                <textarea
                    placeholder="описание задачи"
                    value={form.description}
                    onChange={handleChange('description')}
                    name="description"
                />
                <div className="form-buttons">
                    <Button
                        name="обсудить в почте"
                        color="white"
                        back="main"
                        onClick={() => sendWith('mail')}
                    />
                    <Button
                        name="обсудить в tg"
                        color="main"
                        back="black"
                        onClick={() => sendWith('tg')}
                    />
                </div>
            </form>
        </div>
    </div>);
}
