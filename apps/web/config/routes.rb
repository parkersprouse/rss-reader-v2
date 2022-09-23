# Configure your routes here
# See: https://guides.hanamirb.org/routing/overview

get '/feeds', to: 'feeds#index'
post '/feeds', to: 'feeds#create'
patch '/feeds/:id', to: 'feeds#update'
