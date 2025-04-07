import styles from './MainPage.module.scss';

const itemsList = [
  {
    icon: 'icon1',
    title: 'Create Dashboard',
  },
  {
    icon: '',
    title: '',
  },
];

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <h1>MainPage</h1>
      <ul className={styles.container}>
        {itemsList.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.icon}></div>
            <p className={styles.title}></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
