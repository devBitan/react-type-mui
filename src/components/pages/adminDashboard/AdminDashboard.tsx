import React, { useEffect, useState } from 'react';
import './adminDashboard.css';
import PrimarySearchAppBar from '../../organisms/navbarSearch/NavbarSearch';
import TopClansForEachModule from '../../molecules/TopClansForEachModule/TopClansForEachModule';
import BarChartLayout from '../../molecules/BarChart/BarChartLayout';
import CoderCard from '../../atoms/CoderCard/CoderCard';
import { TopCoderBox } from '../../molecules/topCodersBox/TopCoderBox';
import { Box } from '@mui/material';
import { dashboardAdmin } from '../../../api/adminDashboard';

export const AdminDashboard: React.FC = () => {

    const [users, setUsers] = useState<any[]>([]);
    const { getUsers } = dashboardAdmin();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
                console.log(usersData);
            } catch (error) {
                console.error('Error fetching clans:', error);
            }
        };

        fetchUsers();
    }, []);
    // console.log(clans)

    // Mapeamos los datos de los clanes para obtener etiquetas y valores
    // const labels = users.map((clan) => clan.name);
    // const data = users.map((clan) => clan.coins);

    return (
        <>
            <PrimarySearchAppBar />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: 1150,
                    maxHeight: 823,
                    borderRadius: 3,
                    marginX: 'auto',
                    marginY: 3,
                    border: 2.5,
                    paddingY: 4,
                    paddingX: 4,
                    borderColor: 'rgb(88, 85, 85)',
                    boxShadow: '1px 5px 5px #858585',
                    gap: 5
                }}
            >
                <BarChartLayout title='Total puntos por clan' />
                <TopCoderBox>
                    {users
                        .sort((a, b) => b.totalCoins - a.totalCoins)
                        .map((user, index) => (
                            <CoderCard
                                key={user.id || index}
                                name={user.name}
                                mail={user.email}
                                coins={user.totalCoins}
                                clan={user.clans[0].name}
                                imgUrl={user.urlImage}
                                classImg={index === 0 ? 'firstImage' : 'null'}
                            />
                        ))}
                </TopCoderBox>
                <TopClansForEachModule />
            </Box>
        </>
    )
};

