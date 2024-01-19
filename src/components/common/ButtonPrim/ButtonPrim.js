
const ButtonPrim = ({ children, ...props }) => {
  return (
    
    <button className='btn btn-primary ms-3' {...props}>{children}</button>
  );
}
export default ButtonPrim;