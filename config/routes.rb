Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :emojis, only: [:index]
    resources :asia_emojis, only: [:index]
    resources :africa_emojis, only: [:index]
    resources :europe_emojis, only: [:index]
    resources :us_emojis, only: [:index]
  end
end
