import '../App.css';
import { Card } from '../components/Card';
import { IstateTodosProps, ITask } from '../components/Interfaces';

const Home = ({ stateTodos }: IstateTodosProps) => {
  return (
    <div className='card-wrapper'>
      {stateTodos.map((item: ITask) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
export default Home;
