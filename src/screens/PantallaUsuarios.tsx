
import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import { Table, TableBody, TableHead, TableRow, TableCell, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink, Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { getUsers } from "../resources/UserFitebase"
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function PantallaUsuarios() {

  const [users, setUser] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);
  const [borrar, setBorrars] = useState(false);
  const [userToDelete, setUserToDelete] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);


  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const fbUsers = await getUsers();
    setUser(fbUsers.docs);
  }

  const deleteUser = async (user: QueryDocumentSnapshot<DocumentData> | null) => {
    if (user) {
      await deleteDoc(doc(db, "users", user.id));
      getUsersData();
    }
  }
  const rowColors = ['#FFFFFF', '#F5F8F8'];
  const colors = ['#242424', '#242424'];

  return (
    <div>
      <div>
      <NavLink to={`/Formulario/0`} >
          <IconButton size="large" edge="end" aria-label="logo" style={{ color: '#479BBF' }}>
            <AddBoxIcon fontSize='large' />
          </IconButton>
        </NavLink>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
              <TableRow style={{ backgroundColor: '#F5F8F8', }}>
                <TableCell style={{ color: '#242424' }}>ID</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Name</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Address</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Role</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Salary</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Actions</TableCell>
                <TableCell align="right" style={{ color: '#242424' }}>Delete

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user: QueryDocumentSnapshot<DocumentData>, index) => {
                const { name, address, role, salary } = user.data();
                const { id } = user;
                function setConfirmDelete(arg0: boolean): void {
                  throw new Error('Function not implemented.');
                }

                return (
                  <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    style={{ backgroundColor: rowColors[index % 2] }}
                  >
                    <TableCell style={{ color: colors[index % 2] }} >{id}</TableCell>
                    <TableCell align="right" style={{ color: colors[index % 2] }}> {name}</TableCell>
                    <TableCell align="right" style={{ color: colors[index % 2] }}>{address}</TableCell>
                    <TableCell align="right" style={{ color: colors[index % 2] }}>{role}</TableCell>
                    <TableCell align="right" style={{ color: colors[index % 2] }}>{salary}</TableCell>
                    <TableCell align="right">
                      <NavLink to={`/Formulario/${user.id}`} >
                        <IconButton size="large" edge="end" aria-label="logo" style={{ color: '#479BBF' }}>
                          <EditIcon fontSize='large' />
                        </IconButton>
                      </NavLink>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="large" edge="end" aria-label="logo" style={{ color: '#C70039' }} onClick={() => {
                        setUserToDelete(user);
                        setBorrars(true);
                      }}>
                        <DeleteIcon fontSize='large' />
                      </IconButton>
                    </TableCell>
                    {borrar && (
                      <Dialog open={true} onClose={() => setBorrars(false)}>
                        <DialogTitle>Confirmar eliminación</DialogTitle>
                        <DialogContent>
                          <p>¿Estás seguro de que quieres eliminar al usuario {userToDelete?.id}?</p>
                        </DialogContent>
                        <DialogActions>
                          <Button variant="contained" style={{ backgroundColor: '#C70039', color: 'white', borderRadius: 5 }} onClick={() => {
                            deleteUser(userToDelete);
                            setBorrars(false);
                          }}>
                            Sí
                          </Button>
                          <Button variant="contained" style={{ backgroundColor: '#479BBF', color: 'white', borderRadius: 5 }} onClick={() => {
                            setUserToDelete(null);
                            setBorrars(false);
                          }}>
                            No
                          </Button>
                        </DialogActions>
                      </Dialog>
                    )}
                  </TableRow>)
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default PantallaUsuarios;