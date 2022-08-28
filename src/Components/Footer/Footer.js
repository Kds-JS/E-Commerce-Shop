import React, { div } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FcShipped } from 'react-icons/fc';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { TbCornerUpLeftDouble } from 'react-icons/tb';

function Footer(props) {
    return (

        <footer>
            <div className='footer-1'>
                <div>
                    <div>
                        <FcShipped/>
                    </div>
                    <strong>Livraison gratuite</strong>
                    <br />
                    <span>Voir conditions*</span>
                </div>

                <div>
                    <div>
                        <AiOutlineClockCircle/>
                    </div>
                    <strong>Satisfait</strong>
                    <br />
                    <span>ou remboursé*</span>
                </div>

                <div>
                    <div>
                        <TbCornerUpLeftDouble/>
                    </div>
                    <strong>30 jours</strong>
                    <br />
                    <span>pour changer d'avis*</span>
                </div>

                <div>
                    <div>
                        <MdPayment/>
                    </div>
                    <strong>Paiement sécurisé</strong>
                    <br />
                    <span>100% tranquilité*</span>
                </div>
                
            </div>

            <div className='footer'>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <h3>Produits</h3>
                        <ul>
                        <li>Hommes</li>
                        <li>Femmes</li>
                        <li>Enfants</li>
                        
                        </ul>
                    </div>
                
                    <div class="col-lg-3 col-md-6">
                        <h3>INFORMATIONS</h3>
                        <ul>
                        <li>À propos de nous</li>
                        <li>Termes et conditions</li>
                        <li>Bog</li>
                        <li>FAQ</li>
                        </ul>
                    </div>
                
                    <div class="col-lg-3 col-md-6">
                        <h3>POLITIQUE</h3>
                        <ul>
                        <li>Presse</li>
                        <li>Politique de retour</li>
                        </ul>
                    </div>
                
                
                    <div className="col-lg-3 col-md-6">
                        <h3>NEWSLETTER</h3>
                        <form>
                        <div>
                            <label for="email" class="form-label">Adresse Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                            <p>Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</p>
                            <button type="submit" class="btn btn-primary w-100">Envoyer</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

             <div className='footer-2'>
                <div>
                    <h6>@2022 <span>E-shop</span> Device Co. | Ltd. | Tous droits réservés.</h6>
                </div>
                <div className='reseau'>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebookF/>
                </div>
            </div>
            
        </footer>
        
    );
}

export default Footer;