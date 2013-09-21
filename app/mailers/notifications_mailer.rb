class NotificationsMailer < ActionMailer::Base
  default :from => "octaviopochiero@gmail.com"
  default :to => "octaviopochiero@gmail.com"

  def new_message(message)
    @message = message
    mail(:subject => "Mensaje de contacto del sitio orbital.com")
  end

end
