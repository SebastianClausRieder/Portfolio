<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Ermöglichen Sie, dass die Vorbereitung stattfindet.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): // Sende die E-Mail;
        header("Access-Control-Allow-Origin: *");
        // Payload wird nicht an die $_POST Variable gesendet,
        // wird als Text an php:input gesendet
        $json = file_get_contents('php://input');
        // Parse das Payload vom Textformat in ein Objekt
        $params = json_decode($json);

        $mail = $params->mail;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'sebastian.rieder@live.com';
        // $cc = $mail; // Kopie an die E-Mail-Adresse aus der Variable $mail senden
        $subject = "Contact From <$mail>";
        $message = "From:" . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        // Zusätzliche Header
        $headers[] = "From: noreply@rieder-sebastian.de";
        // $headers[] = "CC: $mail"; // Hinzufügen der Kopie an die E-Mail-Adresse aus $mail

        mail($recipient, $subject, $message, implode("\r\n", $headers));
    
        // Automatische Antwort an Absender senden
        $autoResponseSubject = "Vielen Dank für Ihre Nachricht an Sebastian Rieder";
        $autoResponseBody = "Sehr geehrte(r) $name,\n\nVielen Dank für Ihre Kontaktaufnahme.\nIhre Anfrage ist bei mir eingegangen und wird umgehend bearbeitet.\nIch werden mich in Kürze bei Ihnen melden.\n\nMit freundlichen Grüßen,\n\nSebastian Rieder";
        $autoResponseHeaders = "From: noreply@rieder-sebastian.de";
        mail($mail, $autoResponseSubject, $autoResponseBody, $autoResponseHeaders);
        break;
    default: // Ablehnen von allen Anfragen, die nicht POST oder OPTIONS sind.
        header("Allow: POST", true, 405);
        exit;
}