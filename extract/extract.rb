def UcMessage( message )
	message.gsub!(/\s+/, ' ')
	return if message.length > 140
	return if message.length < 10
	if message.match(/^".*"$/)
		puts message
		return
	end
	if message.match(/^[A-Z].*\.$/)
		puts message
		return
	end
#	puts message
end

require('./messages')
require('./messages2')
