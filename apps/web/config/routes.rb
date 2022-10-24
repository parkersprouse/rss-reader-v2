# @reference https://guides.hanamirb.org/routing/overview

root to: 'home#index', as: :root

namespace 'auth' do
  get '/sign_in', to: 'auth#sign_in', as: :sign_in
  post '/sign_in', to: 'auth#process_sign_in', as: :process_sign_in

  get '/sign_out', to: 'auth#sign_out', as: :sign_out

  get '/create_account', to: 'auth#create_account', as: :create_account
  post '/create_account', to: 'auth#process_create_account', as: :process_create_account

  get '/reset_password', to: 'auth#reset_password', as: :reset_password
  post '/reset_password', to: 'auth#process_reset_password', as: :process_reset_password
end

namespace 'feeds' do
  get '/', to: 'feeds#index', as: :feed_index
  post '/', to: 'feeds#create', as: :feed_create
  patch '/:id', to: 'feeds#update', as: :feed_update
  delete '/:id', to: 'feeds#delete', as: :feed_delete
end
get '/settings', to: 'settings#show'
patch '/settings', to: 'settings#update'
