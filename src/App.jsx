import liff from "@line/liff";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";

const ebooks = [
  { id: 1, title: 'ภาวะซึมเศร้า (Depressive)', coverUrl: '/src/assets/bookimg/depressive.JPG', pdfUrl: 'https://heyzine.com/flip-book/9147bcd2db.html' },
  { id: 2, title: 'วิธีรับมือกับความเครียดในชีวิตประจำวัน', coverUrl: 'https://placehold.co/400', pdfUrl: '/pdfs/book2.pdf' },
  { id: 3, title: 'การสร้างความสุขง่ายๆ ในชีวิต', coverUrl: 'https://placehold.co/400', pdfUrl: '/pdfs/book3.pdf' },
  { id: 4, title: 'ความสัมพันธ์กับตัวเองและผู้อื่น', coverUrl: 'https://placehold.co/400', pdfUrl: '/pdfs/book4.pdf' },
  { id: 5, title: 'คู่มือการจัดการอารมณ์', coverUrl: 'https://placehold.co/400', pdfUrl: '/pdfs/book5.pdf' },
];

function App() {
  // const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   liff.init({
  //     liffId: 'YOUR_LIFF_ID'
  //   })
  //   .then(() => {
  //     if (liff.isLoggedIn()) {
  //       liff.getProfile()
  //         .then(profile => setProfile(profile));
  //     } else {
  //       liff.login();
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }, []);

  return (
    <div>
      {/* {profile ? (
        <div>
          <p>Hello, {profile.displayName}!</p>
          <img src={profile.pictureUrl} alt="Profile" />
        </div>
      ) : (
        <p>Loading...</p>
      )} */}
      <Header />
      <BookList ebooks={ebooks} />
    </div>
  );
}

export default App;
