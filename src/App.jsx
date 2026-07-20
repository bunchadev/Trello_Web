import { Routes, Route, Navigate } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import NotFound from '~/pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from '~/pages/Auth/AccountVerification'

function App() {
  return (
    <Routes>
      {/* redirect route */}
      <Route path='/' element={
        /***
         * Ở đây cần replace giá trị true để nó thay thế route /, có thể hiểu route / sẽ không nằm
         * trong lịch sử trình duyệt nữa, thực hành trên trang 404 để thấy sự khác biệt
         */
        <Navigate to='/boards/685644743e96ccf31f22e754' replace={true} />
      } />

      {/* board details route */}
      <Route path='/boards/:boardId' element={<Board />} />

      {/* Authentication */}
      <Route path='login' element={<Auth />} />
      <Route path='register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      {/* 404 route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
