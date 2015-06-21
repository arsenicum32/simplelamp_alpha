Template.buy.events
  'keydown': (e) ->
    #paragraph = e.currentTarget
    clickedElement = e.target
    target = $( clickedElement )
    console.log '%cприк, но клавиша нажата\n%cтакие пироги ребята\n%cа код клавиши:%c'+e.keyCode.toString() , COLORS.purple, COLORS.red, COLORS.brown ,COLORS.green
    # increment the counter when button is clicked
    console.log 'на месте' if 'отправить' in target.val()
    Session.set('textBuy', 'Спасибо за заказ в ближайщее время мы свяжемся с вами!') if e.keyCode in [36..39]
    return
