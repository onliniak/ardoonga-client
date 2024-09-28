rm .env
printf "VITE_CURRENT_PAGE_MIDDLE = $1" >> .env
printf '%b\n' >> .env
printf "VITE_STATIC_GENERATOR = true" >> .env
wget -O $1.html http://localhost:3000/index.html