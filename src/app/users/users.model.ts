export interface UserModel {
    id: number;
    name: string;
    email: string;
    phone: string;
    age: number;
    img: string;
    color: string;
    isEditing?: boolean;
}
export const USERS: UserModel[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        age: 30,
        img: 'assets/img/user1.jpg',
        color: '#eebefa',
        isEditing: false
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '987-654-3210',
        age: 28,
        img: 'assets/img/user2.jpg',
        color: '#a5d8ff',
        isEditing: false
    },
    {
        id: 3,
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '555-666-7777',
        age: 25,
        img: 'assets/img/user3.jpg',
        color: '#8ce99a',
        isEditing: false
    },
    {
        id: 4,
        name: 'Alex Brown',
        email: 'alex@example.com',
        phone: '555-666-7777',
        age: 15,
        img: 'assets/img/user4.jpg',
        color: '#b197fc',
        isEditing: false
    },
    {
        id: 5,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        age: 30,
        img: 'assets/img/user1.jpg',
        color: '#96f2d7',
        isEditing: false
    },
    {
        id: 6,
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '987-654-3210',
        age: 28,
        img: 'assets/img/user2.jpg',
        color: '#f3d9fa',
        isEditing: false
    },
    {
        id: 7,
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '555-666-7777',
        age: 25,
        img: 'assets/img/user3.jpg',
        color: '#d8f5a2',
        isEditing: false
    },
    {
        id: 8,
        name: 'Alex Brown',
        email: 'alex@example.com',
        phone: '555-666-7777',
        age: 15,
        img: 'assets/img/user4.jpg',
        color: '#ffe066',
        isEditing: false
    }
];
