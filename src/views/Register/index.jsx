import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Zoom, toast } from 'react-toastify';
import { UserRound, Mail, Lock, LogIn } from 'lucide-react';
import Input from "../../components/Input";
import Button from '../../components/Button';
import Dividers from '../../components/Dividers';
import "./style.css";

export default function Register() {
    const navigate = useNavigate();
    const { setTitle, setCaption, setIsLoad } = useOutletContext();

    const { 
        register, 
        handleSubmit,
        setValue,
        formState: { errors } 
    } = useForm();

    useEffect(() => {
        setTitle("Criar conta");
        setCaption("Comece criando sua conta");
    }, []);

    async function onSubmit(data) {
        setIsLoad(true);

        try {
            const response = await fakeRegister();

            toast.success(response.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom
            });

            setValue('full_name', '');
            setValue('email', '');
            setValue('password', '');
            
        } catch (error) {
            console.log(`Erro ao registrar usuario: ${error.message}`);
        } finally {
            setIsLoad(false);
        }
        
        console.log(data);
    }

    function fakeRegister() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: true,
                    message: "Cadastro efetuado com sucesso. Sua conta já está disponível para acesso."
                });
            }, 1000);
        });
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className='div-inputs'>
                <Input
                    forLabel="nome"
                    label="Nome completo"
                    icon={<UserRound />}
                    type="text"
                    name="nome-completo"
                    placeholder="Seu nome completo"
                    messageError={errors.full_name?.message}
                    {...register("full_name", { required: "Por favor, informe seu nome." })}
                />

                <Input
                    forLabel="email"
                    label="E-mail"
                    icon={<Mail />}
                    type="email"
                    name="email"
                    placeholder="mail@exemplo.com"
                    messageError={errors.email?.message}
                    {...register("email", {
                        required: "Por favor, informe seu e-mail.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Por favor, informe um e-mail com formato valído."
                        }
                    })}
                />

                <Input
                    forLabel="senha"
                    label="Senha"
                    icon={<Lock />}
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    messageError={errors.password?.message}
                    {...register("password", { required: "Por favor, informe sua senha." })}
                />
            </div>

            <Button
                type="submit"
                text="Cadastrar"
                color="success"
            />

            <Dividers />

            <div className="div-register">
                <p>Já tem uma conta?</p>

                <Button
                    type="button"
                    text="Fazer login"
                    icon={<LogIn />}
                    color="default"
                    onClick={() => navigate("/login")}
                />
            </div>
        </form>
    );
}