module Spree
	class ContactsController < BaseController
		layout 'spree/layouts/spree_application'
    if defined?(Spree::Dash)
      helper 'spree/analytics'
    end
    def index
    	@contacts = Contact.all
    end
    def show
    	@contact = Contact.find(params[:id])
    end

		def new
	    @message = Message.new
	  end

	  def create
	    @message = Message.new(params[:message])
	    @contact = Contact.new(params[:message])
	    @contact.save
	    if @message.valid?
	      NotificationsMailer.new_message(@message).deliver
	      redirect_to(contacts_path, :notice => "Mensaje enviado correctamente.")
	    else
	      flash.now.alert = "Por favor, rellene todos los campos."
	      render :new
	    end
	  end

	end
end