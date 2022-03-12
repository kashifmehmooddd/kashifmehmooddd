import "./WidgetLg.css";

export default function WidgetLg() {

  const Orders=[{'id':1,'name':'Kashif Mehmood','Resturaunt':'Papasallis','Date':'19-02-2021','Time':'9:31 pm','Amount':'120$','Status':'Completed'},
  {'id':2,'name':'Kashif Mehmood','Resturaunt':'Papasallis','Date':'19-02-2021','Time':'9:31 pm','Amount':'120$','Status':'Preparing'},
  {'id':3,'name':'Kashif Mehmood','Resturaunt':'Papasallis','Date':'19-02-2021','Time':'9:31 pm','Amount':'120$','Status':'Completed'},
  {'id':5,'name':'Kashif Mehmood','Resturaunt':'Papasallis','Date':'19-02-2021','Time':'9:31 pm','Amount':'120$','Status':'Cancelled'},
  {'id':4,'name':'Kashif Mehmood','Resturaunt':'Papasallis','Date':'19-02-2021','Time':'9:31 pm','Amount':'120$','Status':'Cancelled'},]
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Resturaunt</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Time</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {Orders.map(order=>(
        <tr className="widgetLgTr" key={order.id}>
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.name}</span>
          </td>
          <td className="widgetLgDate">{order.Resturaunt}</td>
          <td className="widgetLgDate">{order.Date}</td>
          <td className="widgetLgDate">{order.Time}</td>
          <td className="widgetLgAmount">{order.Amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.Status} />
          </td>
        </tr>
        ))}
      </table>
    </div>
  );
}