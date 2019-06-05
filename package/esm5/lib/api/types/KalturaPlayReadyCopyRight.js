/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyCopyEnablerHolder } from './KalturaPlayReadyCopyEnablerHolder';
import { KalturaPlayReadyRight } from './KalturaPlayReadyRight';
/**
 * @record
 */
export function KalturaPlayReadyCopyRightArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyCopyRightArgs.prototype.copyCount;
/** @type {?|undefined} */
KalturaPlayReadyCopyRightArgs.prototype.copyEnablers;
var KalturaPlayReadyCopyRight = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyCopyRight, _super);
    function KalturaPlayReadyCopyRight(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.copyEnablers === 'undefined')
            _this.copyEnablers = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyCopyRight.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyCopyRight' },
            copyCount: { type: 'n' },
            copyEnablers: { type: 'a', subTypeConstructor: KalturaPlayReadyCopyEnablerHolder, subType: 'KalturaPlayReadyCopyEnablerHolder' }
        });
        return result;
    };
    return KalturaPlayReadyCopyRight;
}(KalturaPlayReadyRight));
export { KalturaPlayReadyCopyRight };
if (false) {
    /** @type {?} */
    KalturaPlayReadyCopyRight.prototype.copyCount;
    /** @type {?} */
    KalturaPlayReadyCopyRight.prototype.copyEnablers;
}
typesMappingStorage['KalturaPlayReadyCopyRight'] = KalturaPlayReadyCopyRight;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixJQUFBO0lBQStDLHFEQUFxQjtJQUtoRSxtQ0FBWSxJQUFxQztRQUFqRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOztLQUN4RTs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDM0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0FsQ0w7RUFXK0MscUJBQXFCLEVBd0JuRSxDQUFBO0FBeEJELHFDQXdCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXInO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeVJpZ2h0LCBLYWx0dXJhUGxheVJlYWR5UmlnaHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5UmlnaHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlDb3B5UmlnaHRBcmdzICBleHRlbmRzIEthbHR1cmFQbGF5UmVhZHlSaWdodEFyZ3Mge1xuICAgIGNvcHlDb3VudD8gOiBudW1iZXI7XG5cdGNvcHlFbmFibGVycz8gOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodCBleHRlbmRzIEthbHR1cmFQbGF5UmVhZHlSaWdodCB7XG5cbiAgICBjb3B5Q291bnQgOiBudW1iZXI7XG5cdGNvcHlFbmFibGVycyA6IEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlckhvbGRlcltdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29weUVuYWJsZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5jb3B5RW5hYmxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0JyB9LFxuXHRcdFx0XHRjb3B5Q291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29weUVuYWJsZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0J10gPSBLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0OyJdfQ==