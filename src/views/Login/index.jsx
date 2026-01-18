import { useEffect } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Zoom, toast } from 'react-toastify';
import { Mail, Lock, UserRoundPlus } from 'lucide-react';
import Input from "../../components/Input";
import Button from '../../components/Button';
import Dividers from '../../components/Dividers';
import "./style.css";

export default function Login() {
    const navigate = useNavigate();
    const { setTitle, setCaption, setIsLoad } = useOutletContext();

    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm();

    useEffect(() => {
        setTitle("Fazer login");
        setCaption("Entre na sua conta para continuar");
    }, []);

    async function onSubmit(data) {
        setIsLoad(true);

        try {
            const response = await fakeLogin(data.email, data.password);

            console.log(response);
            console.log(data);

        } catch (error) {
            console.error(`Erro ao fazer login: ${error.message}`);

            toast.error(error.message, {
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
        } finally {
            setIsLoad(false);
        }
    }

    function fakeLogin(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = {
                    email: "iranijunior95@gmail.com",
                    password: "12345"
                }

                if (email === user.email && password === user.password) {
                    resolve({
                        status: true,
                        message: "Login realizado com sucesso!"
                    });
                } else {
                    reject({
                        status: false,
                        message: "E-mail ou senha inválidos."
                    });
                }
            }, 1000);
        });
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className='div-inputs'>
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

                <div className="div-actions">
                    <label className="check-container">
                        <input
                            type="checkbox"
                            {...register("remember")}
                        />
                        <span className="checkmark"></span>
                        Lembrar-me
                    </label>

                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/recover-password");
                        }}
                    >
                        Recuperar senha
                    </a>
                </div>
            </div>

            <Button
                type="submit"
                text="Entrar"
                color="success"
            />

            <Dividers />

            <div className="div-register">
                <p>Ainda não tem uma conta?</p>

                <Button
                    type="button"
                    text="Criar conta"
                    icon={<UserRoundPlus />}
                    color="default"
                    onClick={() => navigate('/register')}
                />
            </div>
        </form>
    );
}