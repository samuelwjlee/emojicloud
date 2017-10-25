Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :world_emojis, only: [:index, :create, :show]
    resources :asia_emojis, only: [:index, :create, :show]
    resources :africa_emojis, only: [:index, :create, :show]
    resources :europe_emojis, only: [:index, :create, :show]
    resources :america_emojis, only: [:index, :create, :show]
  end
end
