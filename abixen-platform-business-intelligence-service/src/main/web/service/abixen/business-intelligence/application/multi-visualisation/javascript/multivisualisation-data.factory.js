/**
 * Copyright (c) 2010-present Abixen Systems. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

(function () {

    'use strict';

    angular
        .module('platformChartModule')
        .factory('CharData', CharData);

    CharData.$inject = ['$resource'];

    function CharData($resource) {

        return $resource('/api/service/abixen/business-intelligence/application/multi-visualisation/data', {}, {
            query: {method: 'POST', isArray: true}
        });

    }

})();