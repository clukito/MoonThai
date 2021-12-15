function Menu(props) {
  return (
    <div>
      <dl>
        <dt>
          {props.name} $ {props.price}
        </dt>
        <dd> {props.description} </dd>
      </dl>
    </div>
  );
}

export default Menu;
