import React, { useState, ChangeEvent, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, CircularProgress, Alert, Dialog, DialogTitle, DialogContent, DialogActions, TablePagination } from '@mui/material';
import { useAxios } from '../../api/hooks/useAxios';
import CustomButton from '../atoms/CustomButton';

interface Role {
  id: number;
  name: string;
}

interface Data {
  id: string;
  totalCoins: number;
  email: string;
  name: string;
  phoneNumber: string;
  urlImage: string;
  role: Role;
}

interface Filters {
  name: string;
  email: string;
  phoneNumber: string;
  roleName: string;
}

const DataTable: React.FC = () => {
  const { content: data, isLoading, hasErrors } = useAxios<Data[]>('https://codigo-r-0-0-1.onrender.com/api/v1/ricoin/users?page=1&size=10&sortType=NONE&roleType=DEVELOPER', {});
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  const [filters, setFilters] = useState<Filters>({
    name: '',
    email: '',
    phoneNumber: '',
    roleName: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Data | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const applyFilters = () => {
    let newData = data || [];

    if (filters.name) {
      newData = newData.filter((item: Data) => item.name.toLowerCase().includes(filters.name.toLowerCase()));
    }

    if (filters.email) {
      newData = newData.filter((item: Data) => item.email.toLowerCase().includes(filters.email.toLowerCase()));
    }

    if (filters.phoneNumber) {
      newData = newData.filter((item: Data) => item.phoneNumber.includes(filters.phoneNumber));
    }

    if (filters.roleName) {
      newData = newData.filter((item: Data) => item.role.name.toLowerCase().includes(filters.roleName.toLowerCase()));
    }

    setFilteredData(newData);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openModal = (user: Data) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (hasErrors) {
    return <Alert severity="error">Ha ocurrido un error al cargar los datos.</Alert>;
  }

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          name="name"
          label="Nombre"
          value={filters.name}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <TextField
          name="email"
          label="Correo Electrónico"
          value={filters.email}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <TextField
          name="phoneNumber"
          label="Número de Teléfono"
          value={filters.phoneNumber}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <TextField
          name="roleName"
          label="Rol"
          value={filters.roleName}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={applyFilters}>
          Aplicar filtros
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Clan</TableCell>
              <TableCell>Coin</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row: Data) => (
              <TableRow key={row.id}>
                <TableCell>
                <img 
                  className='img-perfil' 
                  width={50}
                  height={50}
                  src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg" 
                  alt={row.name} 
                  style={{ borderRadius: '100%', objectFit: 'cover' }} 
                />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.totalCoins}</TableCell>
                <TableCell>
                  <CustomButton onClick={() => openModal(row)}>Editar</CustomButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[9, 15, 30]}
        labelRowsPerPage="Filas por página"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
      />

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Opciones de Edición</DialogTitle>
        <DialogContent>
          <p>Nombre: {selectedUser?.name}</p>
          <p>Email: {selectedUser?.email}</p>
          {/* Aquí puedes agregar más detalles del usuario */}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cerrar
          </Button>
          <Button onClick={() => {  }} color="primary">
            Editar Información
          </Button>
          <Button onClick={() => {  }} color="primary">
            Sustraer Puntos
          </Button>
          <Button onClick={() => {  }} color="primary">
            Añadir Puntos
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTable;
