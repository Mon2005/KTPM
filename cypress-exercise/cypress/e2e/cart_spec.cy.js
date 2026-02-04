describe('Cart and Checkout Test', () => {
  // Hook chạy trước mỗi bài test để đăng nhập
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // Kịch bản 3 (Đề bài mẫu): Thêm sản phẩm vào giỏ
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4 (Đề bài mẫu): Sắp xếp sản phẩm
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    // Kiểm tra giá sản phẩm đầu tiên là $7.99
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // --- BÀI TẬP YÊU CẦU: KỊCH BẢN MỚI ---

  // Kịch bản 5: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    // 1. Thêm sản phẩm đầu tiên vào giỏ
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    
    // Kiểm tra giỏ hàng đã có 1 món (để chắc chắn đã thêm thành công)
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // 2. Nhấn nút "Remove" (Trên SauceDemo, nút Add đổi thành Remove sau khi click)
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // 3. Xác minh biểu tượng số lượng trên giỏ hàng biến mất (nghĩa là = 0)
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // Kịch bản 6: Kiểm tra quy trình thanh toán (Checkout)
  it('Should verify checkout process step one', () => {
    // 1. Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // 2. Đi đến trang giỏ hàng
    cy.get('.shopping_cart_link').click();
    
    // Kiểm tra đã vào trang giỏ hàng chưa
    cy.url().should('include', '/cart.html');

    // 3. Nhấn nút Checkout
    cy.get('#checkout').click();

    // 4. Điền thông tin (First Name, Last Name, Zip Code)
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    // 5. Nhấn "Continue"
    cy.get('#continue').click();

    // 6. Xác minh chuyển hướng đến trang xác nhận (/checkout-step-two.html)
    cy.url().should('include', '/checkout-step-two.html');
  });
});