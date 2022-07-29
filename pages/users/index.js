import Link from 'next/link';
import styles from '../../styles/Users.module.css';

export const getStaticProps= async ()=>{
     const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const data = await res.json();
    

     return {
        props: {users: data}
     }
}

const Users = ({users}) => {
    return ( 
        <div className={styles.users}>
            <h5>Users</h5>
            {users.map(user => (
                <Link href={`users/${user.id}`} key={user.id}>
                     <a className={styles.single}>
                        <h4>{user.name}</h4>
                     </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Users;
