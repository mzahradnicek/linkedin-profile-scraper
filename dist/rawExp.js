const rawExperiencesData = await page.$$eval('#experience-section ul section.ember-view', (nodes) => {
    let data = [];
    for (const node of nodes) {
        const companyPositions = node.querySelector('> ul > li');
        if (companyPositions) {
            const companyElement = node.querySelector('.pv-entity__company-summary-info h3');
            const companyElementClean = companyElement && (companyElement === null || companyElement === void 0 ? void 0 : companyElement.querySelector('span')) ? (companyElement === null || companyElement === void 0 ? void 0 : companyElement.removeChild(companyElement.querySelector('span'))) && companyElement : companyElement || null;
            const company = (companyElementClean === null || companyElementClean === void 0 ? void 0 : companyElementClean.textContent) || null;
            const locationElement = node.querySelector('.pv-entity__location span:nth-child(2)');
            const location = (locationElement === null || locationElement === void 0 ? void 0 : locationElement.textContent) || null;
            for (const position of companyPositions) {
                const titleElement = position.querySelector('h3');
                const titleElementClean = titleElement && (titleElement === null || titleElement === void 0 ? void 0 : titleElement.querySelector('span')) ? (titleElement === null || titleElement === void 0 ? void 0 : titleElement.removeChild(titleElement.querySelector('span'))) && titleElement : titleElement || null;
                const title = (titleElementClean === null || titleElementClean === void 0 ? void 0 : titleElementClean.textContent) || null;
                data.push({
                    title,
                    company,
                    location
                });
            }
        }
        const titleElement = node.querySelector('h3');
        const title = (titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent) || null;
        const employmentTypeElement = node.querySelector('span.pv-entity__secondary-title');
        const employmentType = (employmentTypeElement === null || employmentTypeElement === void 0 ? void 0 : employmentTypeElement.textContent) || null;
        const companyElement = node.querySelector('.pv-entity__secondary-title');
        const companyElementClean = companyElement && (companyElement === null || companyElement === void 0 ? void 0 : companyElement.querySelector('span')) ? (companyElement === null || companyElement === void 0 ? void 0 : companyElement.removeChild(companyElement.querySelector('span'))) && companyElement : companyElement || null;
        const company = (companyElementClean === null || companyElementClean === void 0 ? void 0 : companyElementClean.textContent) || null;
        const descriptionElement = node.querySelector('.pv-entity__description');
        const description = (descriptionElement === null || descriptionElement === void 0 ? void 0 : descriptionElement.textContent) || null;
        const dateRangeElement = node.querySelector('.pv-entity__date-range span:nth-child(2)');
        const dateRangeText = (dateRangeElement === null || dateRangeElement === void 0 ? void 0 : dateRangeElement.textContent) || null;
        const startDatePart = (dateRangeText === null || dateRangeText === void 0 ? void 0 : dateRangeText.split('–')[0]) || null;
        const startDate = (startDatePart === null || startDatePart === void 0 ? void 0 : startDatePart.trim()) || null;
        const endDatePart = (dateRangeText === null || dateRangeText === void 0 ? void 0 : dateRangeText.split('–')[1]) || null;
        const endDateIsPresent = (endDatePart === null || endDatePart === void 0 ? void 0 : endDatePart.trim().toLowerCase()) === 'present' || false;
        const endDate = (endDatePart && !endDateIsPresent) ? endDatePart.trim() : 'Present';
        const locationElement = node.querySelector('.pv-entity__location span:nth-child(2)');
        const location = (locationElement === null || locationElement === void 0 ? void 0 : locationElement.textContent) || null;
        data.push({
            title,
            company,
            employmentType,
            location,
            startDate,
            endDate,
            endDateIsPresent,
            description
        });
    }
    return data;
});
//# sourceMappingURL=rawExp.js.map