let currentStream = null;
    let frontCamera = true;

function startCamera(facingMode) {
          if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
          }
        
          navigator.mediaDevices.getUserMedia({ video: { facingMode } })
            .then(function(stream) {
              const video = document.getElementById('background-video');
              video.srcObject = stream;
              currentStream = stream;
            })
            .catch(function(err) {
              console.log("Terjadi masalah saat mengakses kamera: " + err);
            });
        }
        
        // Mulai dengan kamera depan
        startCamera('user');
        
        // Toggle antara kamera depan dan belakang
        document.getElementById('toggle-camera').addEventListener('click', function() {
          frontCamera = !frontCamera;
          startCamera(frontCamera ? 'user' : 'environment');
        });
        
        document.getElementById('buttons').addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const results = document.getElementById('results');

      if (name) {
        const kodam = chekKodam(name);
        results.innerHTML = `Khodam Anda Adalah: <strong>${kodam}</strong>`;
      } else {
        results.innerHTML = '<span style="color: red;">Masukkan Nama Kamu!</span>';
      }
    });

    function chekKodam(name) {
      const kodams = ['Rawa Rontek', 'Banteng Merah', 'Siluman Ular', 'Udang Rebus', 'Macan Putih', 'Loreng', 'Kucing Garong', 'Terong Besar'];

      const index = Math.floor(Math.random() * kodams.length);
      return kodams[index];
    }