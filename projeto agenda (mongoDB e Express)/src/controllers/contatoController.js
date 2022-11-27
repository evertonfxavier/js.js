const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  res.render("contato", {
    contato: {},
  });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato/index"));
      return;
    }

    req.flash("success", "Contato registrado com sucesso.");
    // req.session.save(() => res.redirect('/contato/index'));
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.editIndex = async function (req, res) {
  // console.log('temmm0');
  if (!req.params.id) return res.render("404");
  // console.log('temmm1');

  const contato = await Contato.buscaPorId(req.params.id);
  // console.log('temmm2', contato);
  if (!contato) return res.render("404");

  // console.log('temm3', contato);

  res.render("contato", { contato });
};
