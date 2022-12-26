Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'day_statistic/index'
      post 'day_statistic/create'
      get '/show/:id', to: 'day_statistic#show'
      delete '/destroy/:id', to: 'day_statistic#destroy'
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
