
export function Loading() {
    return (
      <div className='h-screen w-screen flex justify-center items-center text-5xl'>
        <p>Loading</p>
      </div>
    )
  }
export function Error(props) {
    return (
      <div className='h-screen w-screen flex justify-center items-center text-5xl text-red-700'>
        <p>Oh no... {props.error}</p>
      </div>
    )
  }
  