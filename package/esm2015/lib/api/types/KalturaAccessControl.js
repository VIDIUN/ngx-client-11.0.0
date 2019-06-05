/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAccessControlArgs() { }
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.name;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.description;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.restrictions;
export class KalturaAccessControl extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.restrictions === 'undefined')
            this.restrictions = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControl' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            restrictions: { type: 'a', subTypeConstructor: KalturaBaseRestriction, subType: 'KalturaBaseRestriction' },
            containsUnsuportedRestrictions: { type: 'b', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControl.prototype.id;
    /** @type {?} */
    KalturaAccessControl.prototype.partnerId;
    /** @type {?} */
    KalturaAccessControl.prototype.name;
    /** @type {?} */
    KalturaAccessControl.prototype.systemName;
    /** @type {?} */
    KalturaAccessControl.prototype.description;
    /** @type {?} */
    KalturaAccessControl.prototype.createdAt;
    /** @type {?} */
    KalturaAccessControl.prototype.isDefault;
    /** @type {?} */
    KalturaAccessControl.prototype.restrictions;
    /** @type {?} */
    KalturaAccessControl.prototype.containsUnsuportedRestrictions;
}
typesMappingStorage['KalturaAccessControl'] = KalturaAccessControl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsTUFBTSwyQkFBNEIsU0FBUSxpQkFBaUI7Ozs7SUFZdkQsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7S0FDeEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLDhCQUE4QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQ3ZELENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24gfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRpc0RlZmF1bHQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVzdHJpY3Rpb25zPyA6IEthbHR1cmFCYXNlUmVzdHJpY3Rpb25bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2wgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0aXNEZWZhdWx0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVzdHJpY3Rpb25zIDogS2FsdHVyYUJhc2VSZXN0cmljdGlvbltdO1xuXHRyZWFkb25seSBjb250YWluc1Vuc3Vwb3J0ZWRSZXN0cmljdGlvbnMgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc3RyaWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVzdHJpY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2wnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0cmVzdHJpY3Rpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdGNvbnRhaW5zVW5zdXBvcnRlZFJlc3RyaWN0aW9ucyA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbDsiXX0=