function FormLogin({email,setEmail, passaword, setPassaword,handleLogin}) {
    return (
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha</label>
            <input
                type="passaword"
                placeholder="Digite a sua senha"
                value={passaword}
                onChange={(e) => setPassaword(e.target.value)}
            />

            <button type="submit">Entrar</button>
        </form>
    )
}

export default FormLogin;