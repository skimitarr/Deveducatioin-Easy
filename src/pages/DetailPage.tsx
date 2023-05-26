import { CardDetail } from '../components/CardDetail';
import { useLocation } from "react-router-dom";
import { ITask, IstateTodosProps } from '../components/Interfaces';

function DetailPage({ stateTodos }: IstateTodosProps) {
  const location = useLocation();
  const title = location.state.title;

  return (
    <div className='card-wrapper'>
      {stateTodos.map((item: ITask) => {
        if (item.title === title) {
          return <CardDetail key={item.title} item={item} />
        }
      })}
    </div>
  );
}
export default DetailPage;

