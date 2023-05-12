import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TextField, Button, IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useForm } from "react-hook-form";
import { addUser, getUsersID, updateUser } from "../resources/UserFitebase";
import { User } from "../resources/User";

const Formulario: React.FC = () => {
  const {
    reset,
    register,
    formState: { errors },
    getValues
  } = useForm();

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [user, setUser] = useState<User |undefined>();
  const id = useParams().id;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setIsLoading(true);
        const fbUser = await getUsersID(id);
        setUser(fbUser);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  async function onSubmit(event: React.FormEvent) {
    const userId = id as string;
    event.preventDefault();
    const userData = getValues() as User;
    if (user) {
      await updateUser(userId, userData);
      setSuccess("Usuario actualizado");
    } else {
      await addUser(userData);
      setSuccess("Usuario agregado");
    }
    reset();
  };


  return (
    <>
    {isLoading && <p>Cargando...</p>} 
      {!isLoading && user  && (
        <>
        <form onSubmit={onSubmit}>
          <TextField
            label="Nombre"
            defaultValue={user?.name}
            {...register("name", { required: true })}
          />
          {errors.name && <span>Este campo es requerido</span>}
          <TextField
            label="Direccion"
            defaultValue={user?.address}
            {...register("address", { required: true })}
          />
          {errors.address && <span>Este campo es requerido</span>}
          <TextField
            label="Role"
            defaultValue={user?.role}
            {...register("role", { required: true })}
          />
          {errors.role && <span>Este campo es requerido</span>}
          <TextField
            label="Salario"
            defaultValue={user?.salary}
            {...register("salary", { required: true, pattern: /^[0-9]+$/ })}
          />
          {errors.salary?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
          {errors.salary?.type === "pattern" && (
            <span>Este campo debe ser un número entero</span>
          )}
          <Button type="submit" variant="contained" color="primary">
            Enviar
            <KeyboardReturnIcon fontSize="large" />
          </Button>
        </form>
        {errors && <p>{error}</p>}
        {success && <p>{success}</p>}
        <Link to="/PantallaUsuarios">
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          style={{ color: "#47BF95" }}
        >
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
      </Link>
        </>
      )}
      {!isLoading && !user && (
        <>
        <form onSubmit={onSubmit}>
          <TextField
            label="Nombre"
            defaultValue={""}
            {...register("name", { required: true })}
          />
          {errors.name && <span>Este campo es requerido</span>}
          <TextField
            label="Direccion"
            defaultValue={""}
            {...register("address", { required: true })}
          />
          {errors.address && <span>Este campo es requerido</span>}
          <TextField
            label="Role"
            defaultValue={""}
            {...register("role", { required: true })}
          />
          {errors.role && <span>Este campo es requerido</span>}
          <TextField
            label="Salario"
            defaultValue={""}
            {...register("salary", { required: true, pattern: /^[0-9]+$/ })}
          />
          {errors.salary?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
          {errors.salary?.type === "pattern" && (
            <span>Este campo debe ser un número entero</span>
          )}
          <Button type="submit" variant="contained" color="primary">
            Enviar
            <KeyboardReturnIcon fontSize="large" />
          </Button>
        </form>
        {errors && <p>{error}</p>}
        {success && <p>{success}</p>}
        <Link to="/PantallaUsuarios">
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          style={{ color: "#47BF95" }}
        >
          <KeyboardReturnIcon fontSize="large" />
        </IconButton>
      </Link>
        </>
      )} 
    </>
  );
}

export default Formulario;
