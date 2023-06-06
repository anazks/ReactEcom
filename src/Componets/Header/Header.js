import './Header.css'
function Header(){
    return(
        <div className='Header'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Accounts</li>
                    <li>  <input type='text' placeholder='Search Items' className='searchBox'/> </li>
                    <li><button className='login'>Login</button></li>
                    <li>Become a Seller</li>
                    <li><select  className='more'> <option>More</option> </select> </li>
                </ul>
        </div>
    )
}

export default Header;