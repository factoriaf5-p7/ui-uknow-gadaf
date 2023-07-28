export const Dropdown = () => {
  const dropdownStyles = {
    display: 'inline-block',
    position: 'relative'
  }

  const buttonStyles = {
    backgroundColor: '#D4EBCE',
    color: '#2D2D2D',
    border: '1px solid #D4EBCE ',
    padding: '0 26px',
    gap: '0.5rem',
    height: '25px',
    width: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600'
  }

  const menuStyles = {
    backgroundImage: 'radial-gradient(circle at 100% 0, #f0f2e4, transparent), radial-gradient(circle at 0 100%, #eaf4c2, transparent), radial-gradient(circle at 100% 100%, #E3DB8A, transparent), radial-gradient(circle at 50% 50%, transparent, rgb(0, 166, 255))',
    border: '1px solid #AED581',
    borderRadius: '20px',
    padding: '0',
    marginTop: '4px',
    boxShadow: '0 2px 4px rgba(93, 93, 93, 0.2)'
  }

  const itemStyles = {
    color: 'black',
    padding: '8px 16px',
    display: 'block',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  }

  return (
    <div style={dropdownStyles}>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
        style={buttonStyles}
      >
        Sort by
      </button>

      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1' style={menuStyles}>
        <li>
          <a className='dropdown-item' href='#' style={itemStyles}>
            Rating
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#' style={itemStyles}>
            Price
          </a>
        </li>
      </ul>
    </div>
  )
}
