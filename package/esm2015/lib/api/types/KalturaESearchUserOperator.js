/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchUserBaseItem } from './KalturaESearchUserBaseItem';
/**
 * @record
 */
export function KalturaESearchUserOperatorArgs() { }
/** @type {?|undefined} */
KalturaESearchUserOperatorArgs.prototype.operator;
/** @type {?|undefined} */
KalturaESearchUserOperatorArgs.prototype.searchItems;
export class KalturaESearchUserOperator extends KalturaESearchUserBaseItem {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.searchItems === 'undefined')
            this.searchItems = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserOperator' },
            operator: { type: 'en', subTypeConstructor: KalturaESearchOperatorType, subType: 'KalturaESearchOperatorType' },
            searchItems: { type: 'a', subTypeConstructor: KalturaESearchUserBaseItem, subType: 'KalturaESearchUserBaseItem' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserOperator.prototype.operator;
    /** @type {?} */
    KalturaESearchUserOperator.prototype.searchItems;
}
typesMappingStorage['KalturaESearchUserOperator'] = KalturaESearchUserOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFRMUcsTUFBTSxpQ0FBa0MsU0FBUSwwQkFBMEI7Ozs7SUFLdEUsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDdEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQ25ILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQzVHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoVXNlckJhc2VJdGVtLCBLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoVXNlckJhc2VJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFVzZXJPcGVyYXRvckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW1BcmdzIHtcbiAgICBvcGVyYXRvcj8gOiBLYWx0dXJhRVNlYXJjaE9wZXJhdG9yVHlwZTtcblx0c2VhcmNoSXRlbXM/IDogS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW1bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3IgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbSB7XG5cbiAgICBvcGVyYXRvciA6IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlO1xuXHRzZWFyY2hJdGVtcyA6IEthbHR1cmFFU2VhcmNoVXNlckJhc2VJdGVtW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VhcmNoSXRlbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnNlYXJjaEl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3InIH0sXG5cdFx0XHRcdG9wZXJhdG9yIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGUnIH0sXG5cdFx0XHRcdHNlYXJjaEl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3InXSA9IEthbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yOyJdfQ==