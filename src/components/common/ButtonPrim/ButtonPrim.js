
const ButtonPrim = ({ children, ...props }) => {
  return (
    
    <button className='btn btn-primary' {...props}>{children}</button>
  );
}
export default ButtonPrim;