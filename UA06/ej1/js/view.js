const View = {
    render(items) {
      const $list = $('#item-list');
      $list.empty();
      items.forEach((item) => {
        $list.append(`<li>${item}</li>`);
      });
    },
  };
  