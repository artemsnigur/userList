import React, { useState, useEffect } from 'react';

const AddUser = ({ onAdd, user }) => {
    const [form, setForm] = useState({
        firstname: user?.firstname ?? '',
        lastname: user?.lastname ?? '',
        bio: user?.bio ?? '',
        age: user?.age ?? '',
        isHappy: user?.isHappy ?? false,
    });

    useEffect(() => {
        if (user) {
            setForm({
                firstname: user.firstname ?? '',
                lastname: user.lastname ?? '',
                bio: user.bio ?? '',
                age: user.age ?? '',
                isHappy: user.isHappy ?? false
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    // const handleSubmit = () => {
    //     const newUser = {
    //         ...form,
    //         age: Number(form.age)
    //     }

    //     if (user) {
    //         newUser.id = user.id;
    //     }
        
    //     onAdd(newUser);

    //     setForm({
    //         firstname: '',
    //         lastname: '',
    //         bio: '',
    //         age: '',
    //         isHappy: false
    //     });
    // }

    const handleSubmit = () => {
        const newUser = {
            ...form,
            age: Number(form.age),
            id: user?.id ?? Date.now() // if editing, keep id; if new, create one
        };

        console.log(form)

        onAdd(newUser);

        setForm({
            firstname: '',
            lastname: '',
            bio: '',
            age: '',
            isHappy: false
        });
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                name='firstname'
                placeholder='First Name' 
                value={form.firstname}
                onChange={handleChange}
            />
            <input 
                name='lastname'
                placeholder='Last Name' 
                value={form.lastname}
                onChange={handleChange}
            />
            <input 
                name='bio'
                placeholder='Biography' 
                value={form.bio}
                onChange={handleChange}
            />
            <input
                name="age"
                type="number"
                value={form.age ?? ''}
                onChange={handleChange}
            />
            <input 
                type='checkbox' 
                id='isHappy' 
                checked={form.isHappy}
                onChange={handleChange}
                name='isHappy'
            />
            <label htmlFor='isHappy'>Happy?</label>

            <button type='button' onClick={() => { handleSubmit() }}>
                {user ? 'Save' : 'Add'}
            </button>
        </form>
    )
}

export default AddUser;