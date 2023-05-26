import { IProps } from './Interfaces';

export function CardDetail({item}: IProps) {
  return (
    <div className="card card-detail">
      <h5 className="card-title">{item.title}</h5>
      <img src={item.imageUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <p className="card-text">expertComment:</p>
        <p className="card-text">{item.expertComment}</p>
      </div>
    </div>
  );
}
