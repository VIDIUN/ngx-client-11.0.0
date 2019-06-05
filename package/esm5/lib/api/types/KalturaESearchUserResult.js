/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaESearchResult } from './KalturaESearchResult';
/**
 * @record
 */
export function KalturaESearchUserResultArgs() { }
/** @type {?|undefined} */
KalturaESearchUserResultArgs.prototype.object;
var KalturaESearchUserResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUserResult, _super);
    function KalturaESearchUserResult(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUserResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserResult' },
            object: { type: 'o', subTypeConstructor: KalturaUser, subType: 'KalturaUser' }
        });
        return result;
    };
    return KalturaESearchUserResult;
}(KalturaESearchResult));
export { KalturaESearchUserResult };
if (false) {
    /** @type {?} */
    KalturaESearchUserResult.prototype.object;
}
typesMappingStorage['KalturaESearchUserResult'] = KalturaESearchUserResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPeEYsSUFBQTtJQUE4QyxvREFBb0I7SUFJOUQsa0NBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFdBQVcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1NBQ3pFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBOUJMO0VBVThDLG9CQUFvQixFQXFCakUsQ0FBQTtBQXJCRCxvQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlciB9IGZyb20gJy4vS2FsdHVyYVVzZXInO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hSZXN1bHQsIEthbHR1cmFFU2VhcmNoUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoVXNlclJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hSZXN1bHRBcmdzIHtcbiAgICBvYmplY3Q/IDogS2FsdHVyYVVzZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoVXNlclJlc3VsdCBleHRlbmRzIEthbHR1cmFFU2VhcmNoUmVzdWx0IHtcblxuICAgIG9iamVjdCA6IEthbHR1cmFVc2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJSZXN1bHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0JyB9LFxuXHRcdFx0XHRvYmplY3QgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaFVzZXJSZXN1bHQnXSA9IEthbHR1cmFFU2VhcmNoVXNlclJlc3VsdDsiXX0=